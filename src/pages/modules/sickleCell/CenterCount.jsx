import React, { useState } from "react";
import DownArrow from '../../../assets/DownArrow.svg';
import UpArrow from '../../../assets/UpArrow.svg';
const CenterCount = () => {
    const [showCenter, setShowCenter] = useState(false);

    const centerCount = [
        { srNo: '1', name: 'Center1', date: '2025-01-24', count: '10' },
        { srNo: '2', name: 'Center2', date: '2025-01-24', count: '10' },
        { srNo: '3', name: 'Center3', date: '2025-01-24', count: '10' },
        { srNo: '4', name: 'Center4', date: '2025-01-24', count: '10' },
        { srNo: '5', name: 'Center5', date: '2025-01-24', count: '10' },
    ];

    const handleToggle = () => {
        setShowCenter(!showCenter);
    }

    return (
        <div
            className={`Right min-w-[96%] ${showCenter ? 'min-h-[120vh]' : 'h-[32vh]'
                } overflow-hidden bg-white shadow-md rounded-md z-20 m-1 absolute`}>
            <div className="w-[88%] mx-auto">
                <div className="headings flex py-2 justify-between items-center p-2 border-b-2">
                    <h1 className="font-semibold">Center Count</h1>
                    <div onClick={handleToggle} className="flex justify-between items-center gap-1 text-[13px] cursor-pointer">
                        <button className='text-blue-500'>{showCenter ? 'View Less' : 'View More'}</button>
                        <img src={showCenter ? UpArrow : DownArrow} alt="Toggle Center" />
                    </div>
                </div>
            </div>

            <div className="centerData">
                <table>
                    <thead>
                        <tr className="text-[14px]">
                            <th className="py-2 px-9 text-[#666666]">Sr. No.</th>
                            <th className="py-2 px-9 text-[#666666]">Name</th>
                            <th className="py-2 px-9 text-[#666666]">Date</th>
                            <th className="py-2 px-9 text-[#666666]">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {centerCount.map((row, index) => (
                            <tr key={index} className="text-center text-[13px]">
                                <td className="py-2 px-4 font-semibold">{row.srNo}</td>
                                <td className="py-2 px-4 font-semibold">{row.name}</td>
                                <td className="py-2 px-4 font-semibold">{row.date}</td>
                                <td className="py-2 px-4 font-semibold">{row.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default CenterCount;