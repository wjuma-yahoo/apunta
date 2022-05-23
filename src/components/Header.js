export const Header = ({ items }) => (
  <div className="ui labeled icon menu">
    {
      items.map( ({ icon }, index) => {
        return (
          <a className={ index === 0 ? 'left item' : 'item'} key={icon}>
            <i className={ icon + ' icon' }></i>
          </a>
        )
      })
    }
  </div>
);
