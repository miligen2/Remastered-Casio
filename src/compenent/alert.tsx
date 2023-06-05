import { useState } from 'react';
import "./alert.css"

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

// ici type a une valeur par defaut (information)
// l'objet props est destructure ici
export default function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  // inference de type: ts devine le type des variables grace
  // au type de retour des fonctions
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  // closeClickHandler handleCloseClick
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className="Alert">
        <div className="centerAlert">
        <div>
        {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            x Fermer
          </span>
        </button>
        
      )} 
      <br/>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      <div>{children}</div>

        </div>
      
    </div>
  );
}
