import PropTypes from "prop-types";

function MedaillenspiegelItem({land}){
    return(
        <tr>
            <td>{land.land}</td>
            <td><button>-</button><div>{land.gold}</div><button>+</button></td>
            <td><button>-</button><div>{land.silber}</div><button>+</button></td>
            <td><button>-</button><div>{land.bronze}</div><button>+</button></td>
            <td>{land.gesamt}</td>
        </tr>
    );
}

MedaillenspiegelItem.propTypes = {
    land: PropTypes.shape({
        land: PropTypes.string.isRequired,
        gold: PropTypes.number.isRequired,
        silber: PropTypes.number.isRequired,
        bronze: PropTypes.number.isRequired,
        gesamt: PropTypes.number.isRequired
    }).isRequired
}

export default MedaillenspiegelItem;