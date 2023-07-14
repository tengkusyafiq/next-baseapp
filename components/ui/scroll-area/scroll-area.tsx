'use client';

import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';

type ScrollAreaProps = {
  className: string;
  children: React.ReactNode;
  orientation?: RadixScrollArea.ScrollAreaScrollbarProps['orientation'];
};

export function ScrollArea({
  children,
  className,
  orientation = 'vertical',
}: ScrollAreaProps) {
  return (
    <RadixScrollArea.Root className={twMerge('overflow-hidden', className)}>
      <RadixScrollArea.Viewport className="h-full w-full">
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        orientation={orientation}
        className={twMerge(
          'touch-none select-none',
          orientation === 'vertical' && 'w-1.5',
          orientation === 'horizontal' && 'flex h-1.5'
        )}
      >
        <RadixScrollArea.ScrollAreaThumb className="relative rounded-full bg-neutral-700" />
      </RadixScrollArea.Scrollbar>
    </RadixScrollArea.Root>
  );
}
