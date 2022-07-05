
const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #f0572d',
      backgroundColor: state.isSelected? '#f0572d': "#fff",       
      lastOfType: 'none',
      color: '#000000',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '19px',
      display:'flex'
      
    }),
    control:()=>({
      display:'flex',
      height: '38px',
      textAlign:'start',
      justifyContent: 'space-between',
      alignItems: 'center'
    }),
/*     placeholder:()=>({
      fontFamily: "Font Awesome 5 Free",
      fontStyle:"normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "16px",
      marginLeft: "12px"
    }), */
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
        
      return { ...provided, opacity, transition };
    }
  }

export default selectStyles;