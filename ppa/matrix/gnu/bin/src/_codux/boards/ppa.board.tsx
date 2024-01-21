import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'ppa',
    Board: () => (
        <div>
            <h1>Plano Plurianual - PPA</h1>,
            <p>
                The Federal Government main medium-term budget planning instrument is the Multi-Year
                Plan (PPA). It defines the guidelines, objectives and goals of the federal public
                administration, covering capital expenses (such as, for example, investments) and
                others resulting from them, in addition to those related to programs of continuous
                duration. The PPA is established by law, valid for four years. It begins in the
                second year of a president term and continues until the end of the first year of his
                successor term.
            </p>
            ,<p></p>The preparation of the PPA begins with a bill proposed by the Executive Branch,
            which must be submitted to the National Congress up to four months before the end of the
            president first year in office. The new Plan is then evaluated and voted on by
            congressmen and then returned in the same year for the president approval. During its
            validity, the PPA guides the preparation of the Budget Guidelines Law (LDO) and the
            Annual Budget Law (LOA). The Federal Constitution also determines that national,
            regional and sectoral plans and programs are drawn up in accordance with the PPA.
        </div>
    ),
    isSnippet: true,
});
