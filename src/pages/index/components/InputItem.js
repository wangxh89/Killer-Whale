import React from "react";
import styles from "./rightItem.less";

class InputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value,id:props.parentId };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({
      value:nextProps.value
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleBlur(event) {
    this.props.changeItemProp({
      id: this.props.parentId,
      key: this.props.type,
      value: event.target.value
    });
  }

  render() {
    let { value,id } = this.state;
    const { handleBlur, type, isNumber,parentId } = this.props;
    return (
      <div className={styles.fqvwjT}>
        <div className={styles.dcJAHC}>
          <span style={{ fontsize: "11px" }} className={styles.ikRkvd}>
            {type}
          </span>
        </div>
        <div className={styles.ffgvpT}>
          <div className={styles.ggjvuQ}>
            <input
              type={isNumber ? "number" : "text"}
              tabIndex="-1"
              className={styles.iqAZmK}
              value={value}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InputItem;
