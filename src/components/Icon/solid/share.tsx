import * as React from 'react';

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 13.433c-.633 0-1.2.25-1.633.642l-5.942-3.458c.042-.192.075-.384.075-.584 0-.2-.033-.391-.075-.583L13.3 6.025A2.49 2.49 0 0015 6.7c1.383 0 2.5-1.117 2.5-2.5S16.383 1.7 15 1.7a2.497 2.497 0 00-2.5 2.5c0 .2.033.392.075.583L6.7 8.208A2.49 2.49 0 005 7.533a2.497 2.497 0 00-2.5 2.5c0 1.384 1.117 2.5 2.5 2.5.658 0 1.25-.258 1.7-.675l5.933 3.467a2.354 2.354 0 00-.066.542A2.436 2.436 0 0015 18.3a2.436 2.436 0 002.433-2.433A2.436 2.436 0 0015 13.433zm0-10.066c.458 0 .833.375.833.833a.836.836 0 01-.833.833.836.836 0 01-.833-.833c0-.458.375-.833.833-.833zm-10 7.5a.836.836 0 01-.833-.834c0-.458.375-.833.833-.833.458 0 .833.375.833.833a.836.836 0 01-.833.834zm10 5.85a.836.836 0 01-.833-.834c0-.458.375-.833.833-.833.458 0 .833.375.833.833a.836.836 0 01-.833.834z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Icon;