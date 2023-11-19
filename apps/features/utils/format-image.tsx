import { FolderIcon } from 'ui/assets/icons/folder-icon';
import { PlaylistIcon } from 'ui/assets/icons/playlist-icon';
import { TrailIcon } from 'ui/assets/icons/trail-icon';

export const featuresImage = (id: number) => {
    let iconComponent;
    switch (id) {
        case 1:
            iconComponent = <TrailIcon />;
            break;
        case 2:
            iconComponent = <PlaylistIcon/>;
            break;
        case 3:
            iconComponent = <FolderIcon/>;
            break;
    }
    return iconComponent;
};