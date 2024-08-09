"use client";

import { Fragment, useRef } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

type IProps = {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
};

export default function ModalContainer({ open, close, children }: IProps) {
  const ref = useRef(null);
  return (
    <Transition appear show={open} as={Fragment} ref={ref}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)]  bg-opacity-[0.10] backdrop-blur-[4.5px] backdrop-filter transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex items-center justify-center ${"min-h-full  p-0"} text-center lg:p-4`}
          >
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={`relative min-w-full transform overflow-hidden text-left align-middle shadow-xl transition-all lg:h-auto lg:w-auto lg:min-w-[450px] lg:bg-transparent lg:px-[40px] `}
              >
                <div className="">{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
