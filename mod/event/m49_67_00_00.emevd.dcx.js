// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49670000)) {
            $InitializeCommonEvent(0, 90055000, 49675200, 1, 49672200, 49670201);
            $InitializeCommonEvent(0, 90055001, 49675200, 1, 49670201, 49670200);
        }
        if (EventFlag(49670001)) {
            $InitializeCommonEvent(0, 90055000, 49675200, 2, 49672200, 49670201);
            $InitializeCommonEvent(0, 90055001, 49675200, 2, 49670201, 49670200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49670200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49672200, 49670200);
    }
    $InitializeCommonEvent(0, 90065910, 49670200, 49672205, 49670800, 920400, 690047, 49670800, 49670800, 904967000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49670200, 49670800, 920400, 49670800, 49670800, 904967000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49670800, 2, 0, 0, 1050, 920400, 904967000, 49670800);
    }
    $InitializeCommonEvent(0, 90015012, 49670800, 49670200);
    $InitializeCommonEvent(0, 90015020, 49670200, 49670800);
    $InitializeCommonEvent(0, 90015008, 49672205, 49670800, 920400, 49670800, 16230, 0);
    $InitializeCommonEvent(0, 90065920, 49670800, 7315);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49672200, 49670800);
        $InitializeCommonEvent(0, 90015023, 49670200, 40, 0, 49670800, 49670800, 904967000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49670200, 49670800, 40, 920400, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49670200, 49670800, 49670800, 1020, 920400, 110320, 904967000, 49670800);
        $InitializeCommonEvent(0, 90015470, 49672200, 49670200, 49670800, 49670800, 0, 0, 0);
        $InitializeCommonEvent(0, 90015476, 10002, 49672200);
        $InitializeCommonEvent(0, 90015476, 10003, 49672200);
        $InitializeCommonEvent(0, 90015476, 10004, 49672200);
        $InitializeCommonEvent(0, 90065140, 49670800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49670800, 49670200, 49670800, 49672200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49672200, 49670800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49672200, 49670800);
    }
    $InitializeCommonEvent(0, 90035001, 49670800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49670000, 49670300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49670000, 49670300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49670000, 49670300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49670000, 49670300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49670000, 49670300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49670000, 49670300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49670000, 49670301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49670000, 49670301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49670000, 49670301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49670000, 49670301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49670000, 49670301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49670000, 49670301);
    }
});

$Event(49672800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49672810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(49670800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49670801);
    CreateReferredDamagePair(49670801, chrEntityId);
    CreateReferredDamagePair(49670802, chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49670800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


