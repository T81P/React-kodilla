import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
  }

  render() {
    const {title, subtitle, lists, changeSearchString} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search action={changeSearchString}/>
        {lists.map(listData => (
          <List key={listData.id}{...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
