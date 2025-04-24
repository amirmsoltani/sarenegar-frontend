import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { Component, ReactNode } from "react";
import { Button } from "@/common/Button/Button";
import styles from "./ErrorBoundary.module.scss";

type TProps = { children: ReactNode };

export class ErrorBoundary extends Component {
  state: Readonly<{ hasError: boolean }>;

  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/error.png" className={styles.cover} />
          <h1 className={styles.title}>مشکل فنی پیش آمده!</h1>
          <p className={styles.description}>لطفا چند لحظه دیگر تلاش کنید</p>
        </div>
        <Link to={routes.login.href()}>
          <Button>برو به خانه</Button>
        </Link>
      </div>
    ) : (
      (this.props as TProps).children
    );
  }
}
