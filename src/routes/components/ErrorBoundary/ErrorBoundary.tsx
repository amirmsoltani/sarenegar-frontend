import { routes } from "@/routes/routes";
import { Component, ReactNode } from "react";
import { Button } from "@/common/Button/Button";
import styles from "./ErrorBoundary.module.scss";

type TProps = { children: ReactNode };

export class ErrorBoundary extends Component<TProps> {
  state: Readonly<{ hasError: boolean; error?: any; catch?: any; catchInfo?: string }>;

  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ catch: error, catchInfo: errorInfo, hasError: true });
    console.log(error, errorInfo);
  }

  copyError = () => {
    navigator.clipboard.writeText(JSON.stringify({ ...this.state }));
  };

  render() {
    return this.state.hasError ? (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/error.png" className={styles.cover} />
          <h1 className={styles.title}>مشکل فنی پیش آمده!</h1>
          <p className={styles.description}>لطفا چند لحظه دیگر تلاش کنید</p>
        </div>
        <a href={routes.login.href()}>
          <Button>برو به خانه</Button>
        </a>
        <Button variant="red" onClick={this.copyError}>
          کپی کردن ارور
        </Button>
      </div>
    ) : (
      this.props.children
    );
  }
}
