"use client"

import React, { useState } from 'react'
import { useOptimistic } from 'react'

type Item = {
	id: string
	title?: string
	description?: string
}

type Props = {
	initialItems: Item[]
}

export default function DashboardList({ initialItems }: Props) {
	const [items, dispatch] = useOptimistic<Item[], { type: string; item?: Item; id?: string; items?: Item[] }>(
		initialItems,
		(state, action) => {
			switch (action.type) {
				case 'update':
					return state.map((s) => (s.id === action.item!.id ? action.item! : s))
				case 'delete':
					return state.filter((s) => s.id !== action.id)
				case 'replace':
					return action.items || state
				default:
					return state
			}
		}
	)

	// track pending operations so the UI can immediately reflect in-flight state
	const [pendingIds, setPendingIds] = useState<Set<string>>(new Set())

	async function handleUpdate(item: Item) {
		const prev = items
		const updated = { ...item, title: prompt('New title', item.title) || item.title }

		// mark as pending immediately
		setPendingIds((p) => {
			const s = new Set(p)
			s.add(item.id)
			return s
		})

		dispatch({ type: 'update', item: updated })

		try {
			await fetch(`/api/contacts/${item.id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(updated),
			})
		} catch (err) {
			// revert on error
			dispatch({ type: 'replace', items: prev })
			console.error('Update failed, reverted', err)
		} finally {
			// clear pending flag
			setPendingIds((p) => {
				const s = new Set(p)
				s.delete(item.id)
				return s
			})
		}
	}

	async function handleDelete(id: string) {
		const prev = items

		// mark as pending immediately
		setPendingIds((p) => {
			const s = new Set(p)
			s.add(id)
			return s
		})

		dispatch({ type: 'delete', id })

		try {
			await fetch(`/api/contacts/${id}`, { method: 'DELETE' })
		} catch (err) {
			// revert on error
			dispatch({ type: 'replace', items: prev })
			console.error('Delete failed, reverted', err)
		} finally {
			// clear pending flag
			setPendingIds((p) => {
				const s = new Set(p)
				s.delete(id)
				return s
			})
		}
	}

	if (!items || items.length === 0) return <div>No items</div>

	return (
		<div>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{items.map((it) => {
					const isPending = pendingIds.has(it.id)
					return (
						<li key={it.id} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, borderBottom: '1px solid #eee', opacity: isPending ? 0.6 : 1 }}>
							<div style={{ flex: 1 }}>
								<strong>{it.title}</strong>
								<div style={{ color: '#666' }}>{it.description}</div>
							</div>
							<button onClick={() => handleUpdate(it)} style={{ padding: '6px 10px' }} disabled={isPending}>
								{isPending ? 'Saving...' : 'Edit'}
							</button>
							<button onClick={() => handleDelete(it.id)} style={{ padding: '6px 10px' }} disabled={isPending}>
								{isPending ? 'Deleting...' : 'Delete'}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
