export type TYesOrNoModal = {
  title: string;
  description: string;
  rejectText?: string;
  acceptText?: string;
  onSubmit: () => Promise<void>;
};

export type TUseYesOrNoModal = Pick<TYesOrNoModal, "onSubmit">;
