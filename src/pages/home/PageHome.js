require('./PageHome.styl');

let {Scroller, Group} = SaltUI;

class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    handleScrollEnd() {
        console.log("scrolled to end");
    }

    render() {
        let t = this;
        return (
            <Scroller className="page" ref="sc" mouseWheel={true} onScrollEnd={t.handleScrollEnd.bind(t)}>
                <div>
                <Group.Head>{"列表标题1"}</Group.Head>
                <Group.List>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                </Group.List>
                <Group.Head>{"列表标题2"}</Group.Head>
                <Group.List>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                    <div className="t-LH44 t-PL10">aa</div>
                </Group.List>
                </div>
            </Scroller>
        );
    }
}

module.exports = Page;