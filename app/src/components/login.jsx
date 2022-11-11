import { useSelector } from 'react-redux';

const user = useSelector(({a}) => {
    return a.user
})