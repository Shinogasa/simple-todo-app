import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

//stateをViewのプロパティに落とし込む
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

//ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
};

//つなぎこみ
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
) (Link);

export default FilterLink;
