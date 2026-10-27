import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { photosCheckedAt, reportPhotos } from '@/data/news';

export const metadata = {
  title: '校园影像 - 北京市第一六六中学（非正式网站）',
  description: '学校公众号公开转载及媒体报道中的校园、课程与艺术活动照片，附年份、图注与原文出处。'
};

const collections = [
  { id: 'campus', title: '校园与校庆', description: '历史校门资料图与2024年建校160周年报道中的校园留影。', articleIds: [8, 20] },
  { id: 'science', title: '课程与科学实践', description: '大学课堂、实验操作、车辆模型竞赛、数学节及学生设计模型。', articleIds: [1, 2, 3, 4, 9, 24] },
  { id: 'reading', title: '书香与阅读', description: '校园书市、附属小学阅读日与区级读书成果展演。', articleIds: [14, 16, 19] },
  { id: 'arts', title: '艺术与舞台', description: '管乐、合唱音乐会及《高地前的抉择》《百合花颂》戏剧展演。', articleIds: [6, 18, 21, 22] },
  { id: 'education', title: '主题教育与协同育人', description: '国家安全主题宣讲与教育共同体成立仪式。', articleIds: [5, 7] }
];

export default function PhotosPage() {
  return (
    <PageLayout title="校园影像" english="CAMPUS IN PICTURES">
      <p className="noindent">从学校公众号的公开转载及媒体报道中，留存校园与学习活动的真实画面。共{reportPhotos.length}幅图片，图片资料核对：{photosCheckedAt}。</p>
      <nav className="photo-collection-links" aria-label="影像分类">
        {collections.map((collection) => <a key={collection.id} href={`#${collection.id}`}>{collection.title}</a>)}
      </nav>
      {collections.map((collection) => (
        <section className="photo-collection" id={collection.id} key={collection.id}>
          <h3 className="block-t">{collection.title}</h3>
          <p className="noindent small-note">{collection.description}</p>
          <div className="photo-archive-grid">
            {reportPhotos.filter(({ article }) => collection.articleIds.includes(article.id)).map(({ article, photo }) => (
              <figure className="photo-archive-card" key={photo.src}>
                <a className="photo-archive-image" href={photo.src} target="_blank" rel="noreferrer" aria-label={`查看大图：${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </a>
                <figcaption>
                  <p>{photo.caption}</p>
                  <span>报道发布：<time dateTime={article.date}>{article.date}</time></span>
                  <a className="photo-source-link" href={photo.sourceUrl ?? article.sourceUrl} target="_blank" rel="noreferrer">图片来源：{photo.credit} ↗</a>
                  <Link className="photo-story-link" href={`/news/${article.id}`}>查看相关报道 &gt;</Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
      <p className="source-note">图片保留原始画幅与水印，点击可查看大图。日期按原报道标注；历史活动与设计模型分别说明。完整出处见<Link href="/sources">资料来源</Link>。本站为同学共建的非正式网站。</p>
    </PageLayout>
  );
}
