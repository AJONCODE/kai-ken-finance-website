


const Ripple = (props) => {

    return(
        <div>
            <div className='ripple-background fixed z-[0] left-0 top-0'>
                <div className='circle circle-blue xxlarge shade1'></div>
                <div className='circle circle-blue xlarge shade2'></div>
                <div className='circle circle-blue bg-white large shade3'></div>
                <div className='circle circle-blue mediun shade4'></div>
                <div className='circle circle-blue small shade5'></div>
            </div>

            <div className='ripple-background fixed z-[0] right-0 bottom-0 hidden md:block'>
                <div className='circle circle-blue xxlarge shade1'></div>
                <div className='circle circle-blue xlarge shade2'></div>
                <div className='circle circle-blue bg-white large shade3'></div>
                <div className='circle circle-blue mediun shade4'></div>
                <div className='circle circle-blue small shade5'></div>
            </div>
        </div>
        );
}

export default Ripple;