import connect from "react-redux";

export default ({ config }) => {
    const {
        actionFunction
    } = config;

    const mapStateToProps = (state, props) => {
        const { parentIdStrings } = props.props;
        const parentIds = parentIdStrings.reduce(
            (ids, parentId) => ({ ...ids, [parentId]: state[parentId] }),
            {}
        );
        return ({
            userId = state.user.data.id,
            parentIds
        });
    };


    const PresentationalComponent = props => {
        const { config, actionFunction, ...props } = props

        const {
            name,
            displayName,
            exampleObject,
            types
        } = config;

        const [formVisibility, setFormVisibility] = useState(false);

        const switchFormVisibility = () => {
            setFormVisibility(!formVisibility);
        }

        const handleClick = e => {
            e.preventDefault();
            switchFormVisibility();
        }

        console.log(`AdderInfo in CreateAdder:\n${AdderInfo}`)
        console.log(`exampleObject in CreateAdder before being passed to AdderForm:\n${exampleObject}`);

        return (
            <div className={`adder ${name}-adder`}>
                <button
                    className={`adder-button ${name}-adder-button`}
                    onClick={handleClick}
                >
                    Add {displayName}
                </button>
                <AdderForm
                    // derived={derived}
                    config={config}
                    switchFormVisibility={switchFormVisibility}
                    formVisibility={formVisibility}
                // props={{ ...AdderInfo, switchFormVisibility, formVisibility }}
                // props={actionFunction, exampleObject, types, switchFormVisibility}
                />
            </div>
        );
    }

    return connect(mapStateToProps, { actionFunction })(PresentationalComponent);
}