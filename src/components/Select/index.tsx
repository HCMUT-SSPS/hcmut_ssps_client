import { FC } from 'react';
import ReactSelect, { GroupBase, Props } from 'react-select';

import './index.css';

interface Option {
  value: string;
  label: string;
}

const Select: FC<Props<Option, false, GroupBase<Option>>> = ({
  options,
  classNamePrefix,
  className,
  ...props
}) => {
  return (
    <ReactSelect
      options={options}
      classNamePrefix={classNamePrefix ? classNamePrefix : 'react-select'}
      className={`react-select__container ${className ? className : ''}`}
      classNames={{
        control: () => 'px-4 py-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]',
        singleValue: () => 'text-base/normal font-medium text-[#6B7280]',
      }}
      menuPlacement='auto'
      {...props}
    />
  );
};

export default Select;
