import IconButton from '../../UI/IconButton'
import classes from './Heading.module.css'
import filter from '../../assets/filter.png';
import { useModal } from '../../hooks/useModal';
import CloseButton from '../../UI/CloseButton';
import Modal from '../../UI/Modal';
import Filters from './Filters';
import { useFilter } from '../../hooks/useFilter';

export default function Heading() {
    const { applyFilters } = useFilter();
    const { isFiltersModalOpen, toggleFilters } = useModal();

    return <>
        <div className={classes.headingContainer}>
            <p className={classes.heding}>Sneakers Collection</p>
            <IconButton
                styles={classes.iconButton}
                image={filter}
                alt='categories logo'
                imgStyles={classes.iconImage}
                onHandleClick={() => toggleFilters()} />
        </div>
        {isFiltersModalOpen ? <Modal open={isFiltersModalOpen} onClose={() => toggleFilters()} modalStyles={classes.modal}>
            <CloseButton onHandleClick={() => toggleFilters()} />
            <Filters applyFilters={applyFilters} toggleFilters={toggleFilters} />
        </Modal> : null}
    </>
}