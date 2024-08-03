import PropTypes from 'prop-types';

function LandMedaillenItem({land}){
    return(
        <tr>
            <td>{land.name}</td>
            <td>{land.iocCode}</td>
            <td>{land.gold}</td>
            <td>{land.silber}</td>
            <td>{land.bronze}</td>
            <td>{land.gesamt}</td>
        </tr>
    );
}

LandMedaillenItem.propTypes = {
    land: PropTypes.shape({
        name: PropTypes.string.isRequired,
        iocCode: PropTypes.string.isRequired,
        gold: PropTypes.number.isRequired,
        silber: PropTypes.number.isRequired,
        bronze: PropTypes.number.isRequired,
        gesamt: PropTypes.number.isRequired,
    }).isRequired,
};

export default LandMedaillenItem;