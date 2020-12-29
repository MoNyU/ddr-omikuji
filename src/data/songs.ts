export type Song = {
  [name: string]: {
    artist: string;
    bpm: string;
    levels: {
      /** 習, 楽, 踊, 激, 鬼。無ければ 0 */
      sp: [number, number, number, number, number];
      /** 楽, 踊, 激, 鬼。無ければ 0 */
      dp: [number, number, number, number];
    };
    /** 鬼がショックアローかどうか */
    sa: boolean;
    /** 初出バージョン(格納フォルダ) */
    version: string;
  };
};
