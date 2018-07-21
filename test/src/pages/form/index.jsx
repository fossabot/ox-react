import React from 'react';
import Input from './Input';
import styles from './style/index.modules.less';

class Form extends React.Component {
  state = {
    uid: '',
    psw: '',
    borderColor: '#ccc',
  };

  componentDidMount() {
    this.getBorderColor();
  }

  getBorderColor() {
    new Promise(resolve => setTimeout(() => resolve(), 3000))
      .then(() => import('./lazyBorderColor'))
      .then(({ default: borderColor }) => {
        console.log({ borderColor });
        this.setState({ borderColor });
      });
  }

  reset = async () => {
    console.log('reset');
    await new Promise(resolve => setTimeout(() => resolve(), 3000));
    this.setState({ uid: '', psw: '' });
  };

  handleUIDChange = uid => {
    this.setState({ uid });
  };

  handlePSWChange = psw => {
    this.setState({ psw });
  };

  render() {
    const { uid, psw, borderColor } = this.state;
    return (
      <div className={styles.container} style={{ borderColor }}>
        UID:<span className={styles.uid}>{uid}</span>
        <br />
        <Input key="uid" value={uid} placeholder="UID" onChange={this.handleUIDChange} />
        <br />
        <br />
        Psw:<span className={styles.psw}>{psw}</span>
        <br />
        <Input key="psw" value={psw} placeholder="PSW" onChange={this.handlePSWChange} />
        <br />
        <br />
        <button type="button" onClick={this.reset}>
          3秒后重置输入
        </button>
      </div>
    );
  }
}

export default Form;
