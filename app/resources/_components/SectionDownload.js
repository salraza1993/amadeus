import Link from 'next/link';

export default function SectionDownload({ data }) {
  const downloadableBlocks = data;
  return <section className="download-section">
    <div className="container">
      <h2 className='fs-1 text-white text-center'>Download the Docs</h2>
      <div className="download-container">
        {
          downloadableBlocks.map((item, index) => {
            const fileType = item?.rDownloadable?.rDownloadableFile?.node?.mimeType.split('/')[1];
            const filePath = item?.rDownloadable?.rDownloadableFile?.node?.mediaItemUrl;
            return <div className="download-card" key ={index}>
              <small>{item?.rSmallText}</small>
              <h5>{item?.rTitleText}</h5>
              {filePath && <Link
                href={filePath}
                download={item?.rDownloadable?.rDownloadedFileName}
                type={"." + fileType}
                target='self'
                title={item?.rDownloadable?.rDownlaodTitle}
                className='download-button'>Download Now <i className="fa-solid fa-download"></i>
              </Link>}
            </div>
          })
        }
      </div>
    </div>
  </section>
}

