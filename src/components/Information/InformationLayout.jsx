import styles from './InformationLayout.module.scss';
import PropTypes from 'prop-types';

const InformationLayout = ({ status }) => {
	return (
		<div className={styles.info}>
			<p>{status}</p>
		</div>
	);
};

InformationLayout.propTypes = {
	status: PropTypes.string,
};

export default InformationLayout;
