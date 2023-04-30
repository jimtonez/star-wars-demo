import Image from "next/image"
import Link from "next/link"

function Footer () {

    return (
        <section className="flex max-w-7xl w-full h-auto">
            <div className='flex flex-row items-center h-auto w-full justify-evenly p-4 p-8'>
                <>
                    <Link href="https://developers.redhat.com/developer-sandbox" className="cursor-pointer">
                    <Image
                        className="object-cover cursor-pointer"
                        priority
                        src="/openshift.svg"
                        alt="OpenShift Logo"
                        width={250}
                        height={250}
                    />
                    </Link>
                </>
                <>
                    <Link href="https://developers.redhat.com/developer-sandbox" className="cursor-pointer">
                    <Image
                        className="object-cover cursor-pointer"
                        priority
                        src="/redhatdev.svg"
                        alt="OpenShift Logo"
                        width={250}
                        height={250}
                    />
                    </Link>
                </>
            </div>
        </section>
    )

}

export default Footer