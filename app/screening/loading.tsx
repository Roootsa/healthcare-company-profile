import React from "react";

export default function ScreeningLoading() {
	return (
		<div role="status" className="p-6 max-w-2xl mx-auto">
			<div className="animate-pulse space-y-4">
				<div className="h-8 bg-gray-200 rounded w-1/3" />
				<div className="h-12 bg-gray-200 rounded" />
				<div className="h-12 bg-gray-200 rounded" />
				<div className="h-12 bg-gray-200 rounded" />
				<div className="h-10 bg-gray-200 rounded w-1/4" />
			</div>
		</div>
	);
}
