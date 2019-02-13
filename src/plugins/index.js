import Disco from './disco';
import DiscoOnly from './discoonly';

import Attention from './attention';
import Avatar from './avatar';
import Blocking from './blocking';
import Bob from './bob';
import Bookmarks from './bookmarks';
import Carbons from './carbons';
import ChatStates from './chatstates';
import Command from './command';
import Correction from './correction';
import CSI from './csi';
import DataForms from './dataforms';
import ExtDisco from './extdisco';
import Geoloc from './geoloc';
import Invisible from './invisible';
import JIDPrep from './jidprep';
import Jingle from './jingle';
import KeepAlive from './keepalive';
import MAM from './mam';
import Markers from './markers';
import MUC from './muc';
import Mood from './mood';
import Nick from './nick';
import Ping from './ping';
import Private from './private';
import Push from './push';
import PubSub from './pubsub';
import Reach from './reach';
import Receipts from './receipts';
import Register from './register';
import Roster from './roster';
import RTT from './rtt';
import Time from './time';
import VCard from './vcard';
import Version from './version';

export default function(client) {
    // We always need this one first
    client.use(Disco);
    client.use(DiscoOnly);

    client.use(Attention);
    client.use(Avatar);
    client.use(Blocking);
    client.use(Bob);
    client.use(Bookmarks);
    client.use(Carbons);
    client.use(ChatStates);
    client.use(Command);
    client.use(Correction);
    client.use(CSI);
    client.use(DataForms);
    client.use(ExtDisco);
    client.use(Geoloc);
    client.use(Invisible);
    client.use(JIDPrep);
    client.use(Jingle);
    client.use(KeepAlive);
    client.use(MAM);
    client.use(Markers);
    client.use(MUC);
    client.use(Mood);
    client.use(Nick);
    client.use(Ping);
    client.use(Private);
    client.use(Push);
    client.use(PubSub);
    client.use(Reach);
    client.use(Receipts);
    client.use(Register);
    client.use(Roster);
    client.use(RTT);
    client.use(Time);
    client.use(VCard);
    client.use(Version);
}
