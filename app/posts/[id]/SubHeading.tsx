

function SubHeading(props: any) {

    const { subHeading, body } = props;

    return (
        <>
        <div className="mt-14">
            <h2 className='text-3xl font-bold'>{subHeading}</h2>
            <p className='text-2xl mt-4'>{body}</p>
        </div>
            
        </>

    )
}

export default SubHeading