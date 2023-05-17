

function SubHeading(props: any) {

    const { subHeading, body, prayerPoints } = props;
    console.log({subHeading, body, prayerPoints});

    return (
        <>
        <div className="mt-14">
            <h2 className='text-2xl md:text-3xl font-bold'>{subHeading}</h2>
            {
            body !== undefined &&   
                <p className='text-xl md:text-2xl mt-4'>{body}</p>
            }
            {prayerPoints !==  undefined && prayerPoints.map((prayerPoint:string)=> <p className='text-xl md:text-2xl mt-4'>{prayerPoint}</p>)}
        </div>
        
        </>

    )
}

export default SubHeading