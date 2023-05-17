function SubHeading(props: any) {

    const { subHeading, body, prayerPoints } = props;

    return (
        <>
        <div className="mt-14">
            <h2 className='text-2xl md:text-3xl font-bold'>{subHeading}</h2>
            {
            body !== undefined &&   
                <p className='text-xl md:text-2xl mt-4'>{body}</p>
            }
            {prayerPoints !==  undefined && prayerPoints.map((prayerPoint:string, index:number) => <p className='text-xl md:text-2xl mt-4' key={index.toString() + prayerPoint[0]}>{prayerPoint}</p>)}
        </div>
        
        </>

    )
}

export default SubHeading