import React from "react";

export default function AdminLoading() {
	return (
		<div role="status" className="p-6">
			<div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="h-32 bg-gray-200 rounded" />
				<div className="h-32 bg-gray-200 rounded" />
				<div className="h-32 bg-gray-200 rounded" />
			</div>

			<div className="mt-6 animate-pulse space-y-4">
				<div className="h-6 bg-gray-200 rounded w-3/4" />
				<div className="h-48 bg-gray-200 rounded" />
			</div>
		</div>
	);
}
