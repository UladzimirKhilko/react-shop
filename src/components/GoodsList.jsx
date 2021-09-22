import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const { goods = [], addToBascket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => {
                return (
                    <GoodsItem
                        key={item.id}
                        {...item}
                        addToBascket={addToBascket}
                    />
                );
            })}
        </div>
    );
}

export { GoodsList };
