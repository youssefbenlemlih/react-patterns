import { createContext, ReactNode, useContext, useState } from "react";
type ConfirmationContext = {
  isModalOpen: boolean;
  askUser: (perform: VoidFunction) => void;
  confirm: VoidFunction;
  cancel: VoidFunction;
};
const ConfirmationContext = createContext<ConfirmationContext>({
  isModalOpen: false,
  askUser: () => {},
  confirm: () => {},
  cancel: () => {},
});

export const ConfirmationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [perform, setPerform] = useState<VoidFunction>();
  console.log(perform, !!perform);
  return (
    <ConfirmationContext.Provider
      value={{
        isModalOpen: !!perform,
        askUser: (perform) => setPerform(() => () => perform),
        confirm: () => {
          perform?.();
          setPerform(undefined);
        },
        cancel: () => {
          setPerform(undefined);
        },
      }}
    >
      {children}
    </ConfirmationContext.Provider>
  );
};

export const useConfirmation = () => useContext(ConfirmationContext);
