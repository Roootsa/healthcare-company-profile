export default function Loading() {
	return (
		<div aria-busy="true" aria-live="polite" style={{padding: 24}}>
			{/* Header skeleton */}
			<div style={{height: 28, width: '40%', background: '#e6e6e6', borderRadius: 6, marginBottom: 20}} />

			{/* Grid of cards skeletons */}
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16}}>
				{Array.from({length: 4}).map((_, i) => (
					<div key={i} style={{padding: 16, background: '#f7f7f7', borderRadius: 8, minHeight: 120}}>
						<div style={{height: 16, width: '60%', background: '#e6e6e6', borderRadius: 4, marginBottom: 12}} />
						<div style={{height: 10, width: '80%', background: '#e6e6e6', borderRadius: 4, marginBottom: 8}} />
						<div style={{height: 10, width: '40%', background: '#e6e6e6', borderRadius: 4}} />
					</div>
				))}
			</div>
		</div>
	)
}
