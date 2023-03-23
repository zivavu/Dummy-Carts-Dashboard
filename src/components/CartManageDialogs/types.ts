export interface DialogBaseProps {
  children: React.ReactNode;
  title: string;
  clickAwayHandler: () => void;
}
export interface ClickAwayListenerProps {
  children: React.ReactNode;
  clickAwayHandler: () => void;
}
