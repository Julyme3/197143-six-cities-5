import React, {memo} from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/header";

const MainLayout = (props) => {
  const {children, className = ``, classNameWrap = ``} = props;

  return (
    <div className={`page ${className}`}>
      <Header />
      <main className={`page__main ${classNameWrap}`}>
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classNameWrap: PropTypes.string,
};

export {MainLayout};
export default memo(MainLayout);
