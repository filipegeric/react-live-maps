import React, { ChangeEvent, useContext, useEffect } from 'react';
import './InterestCheckbox.scss';
import MainContext from '../../../context/MainContext';

interface Props {
  interests: Array<any>;
  width?: string | number | undefined;
}

const InterestCheckbox: React.FC<Props> = (props: Props) => {
  const mainContext = useContext(MainContext);
  const { interests } = props;

  useEffect(() => {
    console.log('effext');
    mainContext.data.checkedInterests.clear();
  }, [mainContext.data.checkedInterests]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      mainContext.data.checkedInterests.add(e.target.value);
    } else {
      mainContext.data.checkedInterests.delete(e.target.value);
    }
  };

  return (
    <form
      style={{ width: props.width ? props.width : 'auto' }}
      className="interest-checkbox"
    >
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <ul>
            {interests.map((el: any) => (
              <li key={el.id}>
                <span>{el.name}</span>
                <div className="is-pulled-right">
                  <input
                    type="checkbox"
                    name="interest"
                    value={el.id}
                    id={el.name}
                    className="switch-input"
                    onChange={handleChange}
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
};

export default InterestCheckbox;
