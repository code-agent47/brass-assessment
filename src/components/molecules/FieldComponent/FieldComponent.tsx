import React, { PureComponent } from 'react';
import FieldComponentStyle from './FieldComponentStyle';
import Input from '../../atoms/Input/Input';

type FieldComponentProps = {
  value: string;
  name: string;
  validate: Function;
  onChange: Function;
  onFocus?: Function;
  inputType?: string;
  className?: string;
  placeholder?: string;
  options?: any
  required?: boolean
};

type FieldComponentState = {
  value: string;
};

class FieldComponent extends PureComponent<
  FieldComponentProps,
  FieldComponentState
> {
  constructor(props: FieldComponentProps){
    super(props);

    this.state = {
      value: this.props.value,
    };

    this.onChange = this.onChange.bind(this);
  }

  public static getDerivedStateFromProps(nextProps: FieldComponentProps) {
    return { value: nextProps.value };
  }

  onChange() {
    return async (event: any) => {
      const name = this.props.name;
      const value = event.target.value;
      console.log("kfj",this.props.validate(value));
      const error = this.props.validate ? await this.props.validate(value) : false;
      this.setState({ value });
      this.props.onChange({ name, value, error });
      if (error === false) {
        event.target.classList.remove('error');
        event.target.classList.add('success');
      } else {
        event.target.classList.add('error');
        event.target.classList.remove('success');
      }
    };
  }

  render() {
    return (
      <FieldComponentStyle className="container-full field-component">
        {this.props.inputType === undefined && (
          <>
            <Input
              type="text"
              className={`input ${this.props.className}`}
              value={this.state.value}
              onChange={this.onChange()}
              placeholder={this.props.placeholder}
              required={this.props.required}
            />
          </>
        )}
        {this.props.inputType === "select" && (
         <>
            <div className={`form-box-unit`}>
                <select onChange={this.onChange()} className={`input ${this.props.className}`} value={this.state.value} required={true}>
                  <option value=""> Please choose</option>
                  {
                      this.props.options && this.props.options?.map((option: any, key: string) => {
                          return(
                            <option value={option.code} key={key} > {option.name} </option>
                          )
                      })
                  }
                </select>
            </div>
        </>
        )}
      </FieldComponentStyle>
    );
  }
}

export default FieldComponent;
