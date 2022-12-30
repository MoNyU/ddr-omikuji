export type SongData = {
  readonly artist: string;
  readonly bpm: string;
  readonly levels: {
    /** 習, 楽, 踊, 激, 鬼。無ければ 0 */
    readonly sp: readonly [number, number, number, number, number];
    /** 楽, 踊, 激, 鬼。無ければ 0 */
    readonly dp: readonly [number, number, number, number];
  };
  readonly name: string;
  /** 鬼がショックアローかどうか。配列の場合は各難易度ごとに SA かどうかを指定する */
  readonly sa: boolean | readonly boolean[];
  /** 初出バージョン(格納フォルダ) */
  readonly version: string;
};

export type Songs = {
  readonly [name: string]: Omit<SongData, "name">;
};
