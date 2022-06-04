
const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #f0572d',
      color: '#000000',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px',
      display:'flex',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

export default selectStyles;