import { FC, ReactNode } from 'react';

interface IBasicWrapperProps {
  children: ReactNode;
}

const BasicWrapper: FC<IBasicWrapperProps> = ({ children }) => {
  return (
    <div className='container-fluid basicWrapper'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-1'></div>
        <div
          className='col-10 basicMainCol align-items-center p-4 ps-5 pe-5'
          style={{ width: '1440px' }}
        >
          {children}
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  );
};

export default BasicWrapper;
