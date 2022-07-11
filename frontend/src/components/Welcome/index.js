import style from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div className={style.wrapper}>
      <h1>Welcome to Hangry Hippo! Hungry? Let's get started!</h1>
    </div>
  );
}
