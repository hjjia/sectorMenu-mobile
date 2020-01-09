import React from 'react';

export default class SectorMenu extends React.Component {
    state = {
        direction: 'left',
        sectorMenuVisible: false,
        centerIconSize: 30,
        sectorItemSize: 30,
    }

    /**
     * 显示环形菜单
     */
    showSectorMenu = () => {
        const { sectorMenuVisible } = this.state;
        this.setState({
            sectorMenuVisible: !sectorMenuVisible,
        })
    }

    onClickSectorMenuItem = (index) => {
        const { sectorMenuItemFunctions } = this.props;
        if (!sectorMenuItemFunctions || typeof(sectorMenuItemFunctions[index]) !== 'function') {
            return;
        }
        sectorMenuItemFunctions[index]();
    }

    getSectorJsx = () => {
        const { sectorMenuItems } = this.props;

        if (!sectorMenuItems || !Array.isArray(sectorMenuItems) || sectorMenuItems.length === 0) {
            return;
        }
        const degAvg = parseInt(180 / sectorMenuItems.length);

        const styles = {};
        const { centerIconSize, sectorMenuVisible } = this.state;

        return sectorMenuItems.map((item, i) => {
            // const styles = {
            //     transform: translate(0, -centerIconSize * 2);
            // };

            return (<div
                className={`sector-item ${sectorMenuVisible && 'sector-item-active'}`}
                style={styles}
                onClick={() => this.onClickSectorMenuItem(i)}
                key={i}
            >
                {item}
            </div>)
        });
    }
    render() {
        const { sectorMenuVisible } = this.state;
        return (
            <div className="sector-menu-wrapper">
                <div className="center-icon" onClick={this.showSectorMenu}>
                    {
                        sectorMenuVisible ? 'x' : '···'
                    }
                </div>
                <div className={`sector-list ${sectorMenuVisible && 'sector-list-active'}`}>
                    {this.getSectorJsx()}
                </div>
            </div>
        )
    }
}

