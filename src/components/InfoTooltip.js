import registrationOk from '../images/registration-ok.svg';

function InfoTooltip ({onClose, isOpen}) {

  return (
    <div className={`popup popup_type_infotool ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img src={registrationOk} alt="" className="popup__result-icon" />
        <p className="popup__title-info">Тут будет в зависимости от результата текст</p>
        <button type="button" className="popup__button-close" onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip ;