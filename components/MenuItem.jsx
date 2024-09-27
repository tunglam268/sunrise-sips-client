export const MenuItem = ({ source = [], isOption = true }) => {
    return source.map((item) => (
        <div className={`flex gap-2 justify-${"end"} max-w-[400px] w-[100%]`}>
            <div className={`${item?.isAttention ? "z-0" : "-z-10"}`}>*</div>
            <div className="flex flex-col gap-1 w-[100%]">
                <div className="flex justify-between">
                    <div className="text-brown-heavy font-semibold text-sm md:text-base">{item?.name}</div>
                    <div className="font-medium text-sm md:text-base text-brown-heavy">{item?.price}</div>
                </div>
                {item?.description && <div className="font-light text-xs  md:text-sm">{item?.description}</div>}
                {item?.options?.length && (
                    <div>
                        <div className="flex gap-3">
                            <div className="text-xs md:text-sm font-semibold italic">{isOption ? "Options" : "Extras (+2)"}:</div>
                            <div className="flex flex-wrap gap-x-3 font-light">
                                {item?.options?.map?.((option) => (
                                    <div className="text-xs md:text-sm font-semibold italic">{option}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    ));
};

export default MenuItem;