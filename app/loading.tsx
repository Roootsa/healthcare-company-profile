import React from "react";

export default function GlobalLoading() {
	return (
		<div role="status" className="h-screen flex items-center justify-center">
			<div className="w-full max-w-3xl p-4">
				<div className="animate-pulse space-y-6">
					<div className="h-8 bg-gray-200 rounded w-1/3 mx-auto" />
					<div className="h-48 bg-gray-200 rounded" />
					<div className="space-y-3">
						<div className="h-4 bg-gray-200 rounded" />
						<div className="h-4 bg-gray-200 rounded w-5/6" />
						<div className="h-4 bg-gray-200 rounded w-2/3" />
					</div>
				</div>
			</div>
		</div>
	);
}
