import React, { Component, ChangeEvent } from 'react';
import './InterestCheckbox.scss';

interface Props {
  interests: Array<any>;
  width?: string | number | undefined;
}

interface State {
  checkedInterests: Array<string>;
}

export default class InterestCheckbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checkedInterests: []
    };
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      this.setState({
        checkedInterests: [...this.state.checkedInterests, e.target.value]
      });
    } else {
      this.setState({
        checkedInterests: this.state.checkedInterests.filter(
          (el: string) => el !== e.target.value
        )
      });
    }
  };

  render() {
    return (
      <form
        style={{ width: this.props.width ? this.props.width : 'auto' }}
        className="interest-checkbox"
      >
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <ul>
              {this.props.interests.map((el: any) => (
                <li key={el.id}>
                  <span>{el.name}</span>
                  <div className="is-pulled-right">
                    <input
                      type="checkbox"
                      name="interest"
                      value={el.id}
                      id={el.name}
                      className="switch-input"
                      onChange={this.handleChange}
                    />
                    <label
                      htmlFor={el.name}
                      className={`switch-label label-${el.name}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    );
  }
}
