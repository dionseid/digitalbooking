
const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #f0572d',
      color: '#000000',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '19px',
      display:'flex'
    }),
    control:()=>({
      height: '2px',
      textAlign:'start',
      backgroundColor: 'red'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
        
      return { ...provided, opacity, transition };
    }
  }

export default selectStyles;